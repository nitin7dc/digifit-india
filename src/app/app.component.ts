import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
} from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { MediaChange, MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy, OnInit {
  mediaSubscription: Subscription;
  authSubscription: Subscription;
  routerSubscription: Subscription;
  loading = true;
  sideNavMode;
  sideNavOpened = false;
  isMobileView = false;

  constructor(
    private titleService: Title,
    private router: Router,
    private mediaObserver: MediaObserver,
  ) {}

  ngOnInit() {
    this.listenToMediaEvents();
    this.listenToRouterEvents();
    this.listenToAuthEvents();
  }

  ngOnDestroy() {
    this.mediaSubscription.unsubscribe();
    this.routerSubscription.unsubscribe();
    this.authSubscription.unsubscribe();
  }

  /**
   * Listen for auth token expired event.
   */
  listenToMediaEvents() {
    this.mediaObserver.asObservable().subscribe((change: MediaChange[]) => {
      this.isMobileView =
        change[0].mqAlias === 'xs' || change[0].mqAlias === 'sm';
      this.sideNavOpened = !this.isMobileView;
      this.sideNavMode = this.isMobileView ? 'over' : 'side';
    });
  }

  /**
   * Listen for auth token expired event.
   */
  listenToAuthEvents() {

  }

  /**
   * Router Events.
   */
  listenToRouterEvents(): void {
    this.routerSubscription = this.router.events.subscribe((routerEvent) => {
      if (routerEvent instanceof NavigationStart) {
        this.loading = true;
      }

      if (
        routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationCancel ||
        routerEvent instanceof NavigationError
      ) {
        this.loading = false;
      }
    });
  }

}
