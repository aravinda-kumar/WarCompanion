import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'walkthroughSlider',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'addAccount', loadChildren: './add-account/add-account.module#AddAccountPageModule' },
  { path: 'albums', loadChildren: './albums/albums.module#AlbumsPageModule' },
  { path: 'altSlidingList', loadChildren: './alt-sliding-list/alt-sliding-list.module#AltSlidingListPageModule' },
  { path: 'altThumbnailList', loadChildren: './alt-thumbnail-list/alt-thumbnail-list.module#AltThumbnailListPageModule' },
  { path: 'alternativeProfile', loadChildren: './alternative-profile/alternative-profile.module#AlternativeProfilePageModule' },
  { path: 'avatarList', loadChildren: './avatar-list/avatar-list.module#AvatarListPageModule' },
  { path: 'basicList', loadChildren: './basic-list/basic-list.module#BasicListPageModule' },
  { path: 'buttons', loadChildren: './buttons/buttons.module#ButtonsPageModule' },
  { path: 'calendar', loadChildren: './calendar/calendar.module#CalendarPageModule' },
  { path: 'calendarEvent', loadChildren: './calendar-event/calendar-event.module#CalendarEventPageModule' },
  { path: 'cards', loadChildren: './cards/cards.module#CardsPageModule' },
  { path: 'cloud', loadChildren: './cloud/cloud.module#CloudPageModule' },
  { path: 'condensedList', loadChildren: './condensed-list/condensed-list.module#CondensedListPageModule' },
  { path: 'condensedSlidingList', loadChildren: './condensed-sliding-list/condensed-sliding-list.module#CondensedSlidingListPageModule' },
  { path: 'contactForm', loadChildren: './contact-form/contact-form.module#ContactFormPageModule' },
  { path: 'contactFormAlt', loadChildren: './contact-form-alt/contact-form-alt.module#ContactFormAltPageModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'dayOverview', loadChildren: './day-overview/day-overview.module#DayOverviewPageModule' },
  { path: 'dividersList', loadChildren: './dividers-list/dividers-list.module#DividersListPageModule' },
  { path: 'dropdowns', loadChildren: './dropdowns/dropdowns.module#DropdownsPageModule' },
  { path: 'eventDetails', loadChildren: './event-details/event-details.module#EventDetailsPageModule' },
  { path: 'eventsList', loadChildren: './events-list/events-list.module#EventsListPageModule' },
  { path: 'expenseOverview', loadChildren: './expense-overview/expense-overview.module#ExpenseOverviewPageModule' },
  { path: 'gridTiles', loadChildren: './grid-tiles/grid-tiles.module#GridTilesPageModule' },
  { path: 'headersList', loadChildren: './headers-list/headers-list.module#HeadersListPageModule' },
  { path: 'homeAlt', loadChildren: './home-alt/home-alt.module#HomeAltPageModule' },
  { path: 'iconList', loadChildren: './icon-list/icon-list.module#IconListPageModule' },
  { path: 'inputs', loadChildren: './inputs/inputs.module#InputsPageModule' },
  { path: 'insetList', loadChildren: './inset-list/inset-list.module#InsetListPageModule' },
  { path: 'listThumbCentered', loadChildren: './list-thumb-centered/list-thumb-centered.module#ListThumbCenteredPageModule' },
  { path: 'listThumbEnd', loadChildren: './list-thumb-end/list-thumb-end.module#ListThumbEndPageModule' },
  { path: 'listThumbStart', loadChildren: './list-thumb-start/list-thumb-start.module#ListThumbStartPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'loginBackground', loadChildren: './login-background/login-background.module#LoginBackgroundPageModule' },
  { path: 'loginFooter', loadChildren: './login-footer/login-footer.module#LoginFooterPageModule' },
  { path: 'mail', loadChildren: './mail/mail.module#MailPageModule' },
  { path: 'multiLineList', loadChildren: './multi-line-list/multi-line-list.module#MultiLineListPageModule' },
  { path: 'noLinesList', loadChildren: './no-lines-list/no-lines-list.module#NoLinesListPageModule' },
  { path: 'orderedList', loadChildren: './ordered-list/ordered-list.module#OrderedListPageModule' },
  { path: 'paymentHistory', loadChildren: './payment-history/payment-history.module#PaymentHistoryPageModule' },
  { path: 'products', loadChildren: './products/products.module#ProductsPageModule' },
  { path: 'profileSettings', loadChildren: './profile-settings/profile-settings.module#ProfileSettingsPageModule' },
  { path: 'scheduleDay', loadChildren: './schedule-day/schedule-day.module#ScheduleDayPageModule' },
  { path: 'scheduleMonth', loadChildren: './schedule-month/schedule-month.module#ScheduleMonthPageModule' },
  { path: 'selectors', loadChildren: './selectors/selectors.module#SelectorsPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'signupAlt', loadChildren: './signup-alt/signup-alt.module#SignupAltPageModule' },
  { path: 'slidingList', loadChildren: './sliding-list/sliding-list.module#SlidingListPageModule' },
  { path: 'storage', loadChildren: './storage/storage.module#StoragePageModule' },
  { path: 'thumbButtonsList', loadChildren: './thumb-buttons-list/thumb-buttons-list.module#ThumbButtonsListPageModule' },
  { path: 'thumbButtonsListAlt', loadChildren: './thumb-buttons-list-alt/thumb-buttons-list-alt.module#ThumbButtonsListAltPageModule' },
  { path: 'walkthrough', loadChildren: './walkthrough/walkthrough.module#WalkthroughPageModule' },
  { path: 'walkthroughAlt', loadChildren: './walkthrough-alt/walkthrough-alt.module#WalkthroughAltPageModule' },
  { path: 'walkthroughSlider', loadChildren: './walkthrough-slider/walkthrough-slider.module#WalkthroughSliderPageModule' },
  { path: 'wallet', loadChildren: './wallet/wallet.module#WalletPageModule' },
  { path: 'walletAlt', loadChildren: './wallet-alt/wallet-alt.module#WalletAltPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
