// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA2jq1nB47ALskcu7uqsvsGR7WcZnuYBts',
  authDomain: 'dsdotfit-c7674.firebaseapp.com',
  projectId: 'dsdotfit-c7674',
  storageBucket: 'dsdotfit-c7674.appspot.com',
  messagingSenderId: '853431419371',
  appId: '1:853431419371:web:12ecb32b53468f1a35d9ae',
  measurementId: 'G-YVGTQQ73G2',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)

// Initialize Google Analytics
export const analytics = () => {
  if (typeof window !== 'undefined') {
    return getAnalytics(app)
  } else {
    return null
  }
}
