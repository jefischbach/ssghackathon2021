import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  answerfg: FormGroup;
  contact = {
    firstName: 'Michelle',
    lastName: 'Obama'
  }
  answered = false;

  messages = [
    {
      incoming: false,
      time: '19:04',
      content: 'Bonjour, j\'ai besoin d\'aide pour localiser mon centre de distribution! Au secours'
    },
    {
      incoming: true,
      content: 'Bonjour!',
      time: '19:15',
    },
    {
      incoming: true,
      content: 'Pas de panique, il suffit que vous retourniez au menu principal. Ensuite, cliquez simplement sur le bouton: \'Trouver un centre de distribution\'',
      time: '19:15',
    }
  ]

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.answerfg = this.fb.group({
      answer: ['']
    });
  }

  send() {
    let h = new Date(Date.now());
    this.messages.push({
      incoming: false,
      content: this.answerfg.controls['answer'].value,
      time: h.getHours().toLocaleString() + ':' + h.getMinutes().toLocaleString()
    });
    this.answerfg.controls['answer'].setValue('');
    if (!this.answered) {
      let aaa = this;
      setTimeout(function () {
        aaa.messages.push({
          incoming: true,
          content: 'De rien! ;)',
          time: h.getHours().toLocaleString() + ':' + h.getMinutes().toLocaleString()
        })
      }, 2000);
      this.answered = true;
    }
  }

}
