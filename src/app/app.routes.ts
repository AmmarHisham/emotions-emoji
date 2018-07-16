import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmotionsComponent } from './components/emotions/emotions.component';


const appRoutes: Routes = [
   { path: 'emotions',   component: EmotionsComponent },
   { path: 'nav',   component: EmotionsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);