// Configuration Nuxt UI pour Winks avec Tailwind CSS v4 et couleurs optimisées
export default {
  strategy: 'merge',
  theme: {
    colors: {
      // Couleurs principales Winks optimisées avec dégradés
      primary: {
        '50': '#eff8ff',
        '100': '#dbeefe',
        '200': '#bfe3fd',
        '300': '#93d3fc',
        '400': '#60bcf8',
        '500': '#1b7cd8', // Couleur de base Winks
        '600': '#1668b8',
        '700': '#145794',
        '800': '#16497a',
        '900': '#183e65',
        '950': '#102543'
      },
      secondary: {
        '50': '#fffbeb',
        '100': '#fef3c7',
        '200': '#fde68a',
        '300': '#fcd34d',
        '400': '#fbbf24',
        '500': '#ffe66b', // Couleur de base Winks
        '600': '#f59e0b',
        '700': '#d97706',
        '800': '#b45309',
        '900': '#92400e',
        '950': '#78350f'
      },
      tertiary: {
        '50': '#fff7ed',
        '100': '#ffedd5',
        '200': '#fed7aa',
        '300': '#fdba74',
        '400': '#fb923c',
        '500': '#ff6600', // Couleur de base Winks
        '600': '#ea580c',
        '700': '#c2410c',
        '800': '#9a3412',
        '900': '#7c2d12',
        '950': '#431407'
      },
      // Couleurs de notification optimisées
      success: {
        '50': '#f0fdf4',
        '100': '#dcfce7',
        '200': '#bbf7d0',
        '300': '#86efac',
        '400': '#4ade80',
        '500': '#22c55e',
        '600': '#16a34a',
        '700': '#15803d',
        '800': '#166534',
        '900': '#14532d',
        '950': '#052e16'
      },
      warning: {
        '50': '#fffbeb',
        '100': '#fef3c7',
        '200': '#fde68a',
        '300': '#fcd34d',
        '400': '#fbbf24',
        '500': '#f59e0b',
        '600': '#d97706',
        '700': '#b45309',
        '800': '#92400e',
        '900': '#78350f',
        '950': '#451a03'
      },
      error: {
        '50': '#fef2f2',
        '100': '#fee2e2',
        '200': '#fecaca',
        '300': '#fca5a5',
        '400': '#f87171',
        '500': '#ef4444',
        '600': '#dc2626',
        '700': '#b91c1c',
        '800': '#991b1b',
        '900': '#7f1d1d',
        '950': '#450a0a'
      },
      info: {
        '50': '#eff6ff',
        '100': '#dbeafe',
        '200': '#bfdbfe',
        '300': '#93c5fd',
        '400': '#60a5fa',
        '500': '#3b82f6',
        '600': '#2563eb',
        '700': '#1d4ed8',
        '800': '#1e40af',
        '900': '#1e3a8a',
        '950': '#172554'
      },
      neutral: {
        '50': '#f9fafb',
        '100': '#f3f4f6',
        '200': '#e5e7eb',
        '300': '#d1d5db',
        '400': '#9ca3af',
        '500': '#6b7280',
        '600': '#4b5563',
        '700': '#374151',
        '800': '#1f2937',
        '900': '#111827',
        '950': '#030712'
      }
    }
  },
  // Configuration des composants avec les nouvelles couleurs
  button: {
    default: {
      color: 'primary'
    },
    variants: {
      gradient: {
        primary: 'bg-gradient-primary hover:bg-gradient-primary text-white',
        secondary: 'bg-gradient-secondary hover:bg-gradient-secondary text-white',
        tertiary: 'bg-gradient-tertiary hover:bg-gradient-tertiary text-white',
        success: 'bg-gradient-success hover:bg-gradient-success text-white',
        warning: 'bg-gradient-warning hover:bg-gradient-warning text-white',
        error: 'bg-gradient-error hover:bg-gradient-error text-white'
      }
    }
  },
  notification: {
    default: {
      color: 'neutral'
    }
  },
  badge: {
    default: {
      color: 'primary'
    }
  }
}
