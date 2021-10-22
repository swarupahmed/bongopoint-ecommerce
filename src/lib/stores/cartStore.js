import { persist, localStorage } from "@macfja/svelte-persistent-store"
import { writable } from "svelte/store"

export let localCart = persist(writable([]), localStorage(), 'localCart')



