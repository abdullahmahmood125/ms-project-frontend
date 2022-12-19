import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-password-policy',
  templateUrl: './password-policy.component.html',
  styleUrls: ['./password-policy.component.css']
})
export class PasswordPolicyComponent implements OnInit, OnChanges {

  @Input() password: string;

  public policy = {
    hasLowerLetter: false,
    hasUpperLetter: false,
    hasNumber: false,
    hasSymbol: false,
    hasEightCharacters: false,
  };

  constructor() { }

  ngOnInit() {
    this.checkPassword();
  }

  ngOnChanges() {
    this.checkPassword();
  }

  checkPassword() {
    const regex = /[$-/:#-?{-~!"^_@`\[\]]/g;
    this.policy.hasLowerLetter = /[a-z]+/.test(this.password);
    this.policy.hasUpperLetter = /[A-Z]+/.test(this.password);
    this.policy.hasNumber = /[0-9]+/.test(this.password);
    this.policy.hasSymbol = regex.test(this.password);
    this.policy.hasEightCharacters = /^.{8,}$/.test(this.password);
  }

}
