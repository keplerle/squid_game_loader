import { InjectionToken } from '@angular/core';
import { LoaderBaseService } from './loader-base.service';

export const GLOBAL_LOADER = new InjectionToken<LoaderBaseService>('Global Loader');
export const LOCAL_LOADER = new InjectionToken<LoaderBaseService>('Local Loader');