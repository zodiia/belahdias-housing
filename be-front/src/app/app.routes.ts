import { Routes } from '@angular/router'
import { HomePage } from './pages/home/home.component'
import { ContactPage } from './pages/contact/contact.component'

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'contact', component: ContactPage },
]
