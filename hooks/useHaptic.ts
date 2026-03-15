import { useCallback } from 'react';

export type HapticType =
    | 'light' | 'medium' | 'heavy'
    | 'hover' | 'tap' | 'action' | 'navigation'
    | 'success' | 'error' | 'warning';

export const useHaptic = () => {
    const playHaptic = useCallback((type: HapticType = 'light') => {
        if (typeof window !== 'undefined' && window.navigator && window.navigator.vibrate) {
            try {
                switch (type) {
                    case 'light':
                    case 'hover':
                        window.navigator.vibrate(10);
                        break;
                    case 'medium':
                    case 'navigation':
                        window.navigator.vibrate(20);
                        break;
                    case 'heavy':
                    case 'tap':
                        window.navigator.vibrate(30);
                        break;
                    case 'action':
                        // Distinct double tap for primary actions
                        window.navigator.vibrate([30, 40, 30]);
                        break;
                    case 'success':
                        // Ascending feel
                        window.navigator.vibrate([15, 30, 45]);
                        break;
                    case 'error':
                        // Stuttering feel
                        window.navigator.vibrate([50, 30, 50, 30, 50]);
                        break;
                    case 'warning':
                        window.navigator.vibrate([40, 40, 40]);
                        break;
                }
            } catch (e) {
                // Ignore vibration errors on unsupported devices
            }
        }
    }, []);

    return playHaptic;
};
