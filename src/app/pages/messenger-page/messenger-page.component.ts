import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { MessageCreatedAction, MessageCreateSetAction, MessageGetAllAction } from '../../store/message/message.actions';
import { getAllMessageSelector } from '../../store/message/message.selectors';
import { StoreTypes } from '../../store/store.types';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../../service/auth/auth.service';
import { MessageService } from '../../service/message/message.service';


@Component({
  selector: 'app-messenger-page',
  templateUrl: './messenger-page.component.html',
  styleUrls: ['./messenger-page.component.css'],
})
export class MessengerPageComponent implements OnInit {
  constructor(private store$: Store<StoreTypes>, private jwtHelper: JwtHelperService, private authService: AuthService, private messageService: MessageService) {
  }

  current_user_id: number;
  messages$ = this.store$.select(getAllMessageSelector);

  ngOnInit(): void {
    const token = this.authService.getToken();
    this.current_user_id = this.jwtHelper.decodeToken(token).sub;
    this.store$.dispatch(MessageGetAllAction());
  }

  scrollHandler(event: any) {
    const element = event.currentTarget
    console.log(Math.abs( (element.scrollHeight - element.scrollTop) - element.clientHeight ) <= 200)
  }

  onEnter(e: any): void {
    this.messageService.sendMessage(e.target.value);
    this.store$.dispatch(MessageCreatedAction());
    e.target.value = '';
  }

}
