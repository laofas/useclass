import { computed, reactive } from 'vue'

export function useClass<T extends object> (Class: new () => T): T {
  const descriptors = Object.getOwnPropertyDescriptors(Class.prototype)
  const instance = reactive(new Class())

  for (const key in descriptors) {
    const { get, set } = descriptors[key]

    if (get || set) {
      const attrs: PropertyDescriptor = {
        configurable: true,
      }

      if (get) {
        const c = computed(get.bind(instance))

        attrs.get = () => c.value
      }

      if (set) {
        attrs.set = set.bind(instance)
      }

      Object.defineProperty(instance, key, attrs)
    }
  }

  return instance as T
}
