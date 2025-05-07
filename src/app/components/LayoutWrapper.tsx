"use client";

import { Provider } from 'react-redux';
import { store } from '@/lib/store';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <>
                <Navbar />
                {children}
                <Footer />
            </>
        </Provider>
    );
}