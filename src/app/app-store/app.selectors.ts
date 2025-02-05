import { createFeatureSelector } from '@ngrx/store';
import {AppStoreState} from './app.state';

export const appStoreSelectors = createFeatureSelector<AppStoreState>('AppStore');
