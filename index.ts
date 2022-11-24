import { computed, reactive } from 'vue'

interface Base {
  setup? (): void
}

export function useClass<T extends object> (Class: new () => T & Base): T {
  const descriptors = Object.getOwnPropertyDescriptors(Class.prototype)
  const instance = reactive(new Class())

  for (const key in descriptors) {
    const { get, set } = descriptors[key]

    // init computed
    if (get) {
      const c = computed(get.bind(instance))

      Object.defineProperty(instance, key, {
        set,
        get: () => c.value
      })
    }
  }

  // Once the instance is created, call the Setup hook
  if (typeof instance.setup === 'function') {
    instance.setup()
  }

  return instance as T
}
