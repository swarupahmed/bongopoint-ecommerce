import { writable } from 'svelte/store'
import { browser } from '$app/env'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged,signOut} from "firebase/auth"
import { app } from './firebase'


const createAuth = () => {
  const { subscribe, set } = writable({ user: null})

  async function listen() {
      console.log('listening for auth')
      const auth = getAuth(app)
      onAuthStateChanged(auth,
        user => set({ user:user}),
        err => console.error(err.message),
        )
  }

  if (browser) {
    listen()
  } else {
    set({ user: null})
  }


  async function logIn(email,password) {
    const auth = getAuth(app)
    await signInWithEmailAndPassword(auth,email,password)
  }
  async function signUp(email,password) {
    const auth = getAuth(app)
    await createUserWithEmailAndPassword(auth,email,password)
  
  }
  async function updateUserData(newProfile) {
    const auth = getAuth(app)
    console.log('updating profile',newProfile)
    updateProfile(auth.currentUser, newProfile)
  }

  async function logOut() {
    const auth = getAuth(app)
    await signOut(auth)
    set({ user: null, known: false })
  }

//TODO signUp(){}
  return {
    subscribe,
    logIn,
    signUp,
    updateUserData,
    logOut
  }
}

export const auth = createAuth()