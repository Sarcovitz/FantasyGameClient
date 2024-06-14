import { Component, OnDestroy, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { AppModule } from './app.module';
import { LayoutModule } from './core/shared/layout/layout.module';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppModule, LayoutModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  private urlSubscription: Subscription | null = null;
  isGameUrl: boolean = false;

  private key: CryptoJS.lib.WordArray;
  private iv: CryptoJS.lib.WordArray;

  constructor(private router: Router)
  {
    let key = '1234567890123456';
    let iv = '1234567890123456';
    this.key = CryptoJS.enc.Utf8.parse(key);
    this.iv = CryptoJS.enc.Utf8.parse(iv);
    this.encrypt('ddd');
    this.decrypt(this.encrypted)
  }

  ngOnInit(): void {
    this.urlSubscription = this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        this.checkIfGameUrl(event.urlAfterRedirects);
      }
    });
  }

  ngOnDestroy(): void {
    if(this.urlSubscription){
      this.urlSubscription.unsubscribe();
    }
  }

  title = 'FantasyGameClient'
  test = '1234';
  secret = '12345678901234567890123456789012';
  //iv = '1234567890123456';

  encrypted = 'test';
  decrypted = '';

  encrypt(data: string): void {
    //let bytes = CryptoJS.enc.Utf8.parse(this.secret)
    let encrypted =  CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(data), this.key, {
      iv: this.iv,
      keySize: 32,
      mode: CryptoJS.mode.CBC,
      //padding: CryptoJS.pad.NoPadding
    });

    this.encrypted = encrypted.toString();//.ciphertext.toString(CryptoJS.enc.Base64)
  }

  decrypt(data: string):void{
    const bytes  = CryptoJS.AES.decrypt(data, this.key,{
      iv: this.iv,
      keySize: 32,
      mode: CryptoJS.mode.CBC,
      //padding: CryptoJS.pad.NoPadding
    });
    const plaintext = bytes.toString(CryptoJS.enc.Utf8);
    this.decrypted = plaintext;
  }

  public checkIfGameUrl(url: string): boolean{
    return this.router.url.includes('/game/')
  }
}


