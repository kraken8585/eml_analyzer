import { createLocalVue, shallowMount } from "@vue/test-utils"
import { describe, expect, it } from "vitest"

import SecurityHeaders from "@/components/headers/SecurityHeaders.vue"
import { securityKeys } from "@/types"

import { header } from "../../fixtures"

const localVue = createLocalVue()

describe("SecurityHeaders.vue", () => {
  describe("#securityHeaders", () => {
    it("returns security headers", () => {
      const wrapper = shallowMount(SecurityHeaders, {
        localVue,
        propsData: { header }
      })

      const headers = (wrapper.vm as any).securityHeaders
      expect(headers.length).toBeGreaterThan(0)

      const keys = headers.map((securityHeader) => securityHeader.key) as string[]

      keys.forEach((key) => expect(securityKeys).toContain(key))
    })
  })
})
