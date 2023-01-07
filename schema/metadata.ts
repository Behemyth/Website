
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

export interface Social {
    name: string
    icon: string
    link: URL
}

export interface MetaData extends ParsedContent {
    socials: Array<Social>
}
