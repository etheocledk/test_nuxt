/**
 * Clés d'injection pour provide/inject
 */
import type { InjectionKey, Ref } from 'vue'

// Clé pour la hauteur du header dans le layout dashboard
export const HeaderHeightKey: InjectionKey<Ref<number>> = Symbol('headerHeight')
