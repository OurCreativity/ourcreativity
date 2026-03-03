import { useCallback } from 'react';

export const useHaptic = () => {
    const playHaptic = useCallback((type: 'light' | 'medium' | 'heavy' | 'success' | 'error' = 'light') => {
        if (typeof window !== 'undefined' && window.navigator && window.navigator.vibrate) {
            try {
                switch (type) {
                    case 'light':
                        window.navigator.vibrate(15);
                        break;
                    case 'medium':
                        window.navigator.vibrate(30);
                        break;
                    case 'heavy':
                        window.navigator.vibrate([40, 30, 60]);
                        break;
                    case 'success':
                        window.navigator.vibrate([15, 30, 25]);
                        break;
                    case 'error':
                        window.navigator.vibrate([50, 40, 50, 40, 50]);
                        break;
                }
            } catch (e) {
                // Ignore vibration errors on unsupported devices
            }
        }
    }, []);

    return playHaptic;
};
