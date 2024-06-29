import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

export function redirectToMail(email) {
  window.location.href = `mailto:${email}`;
}

export function usePreviousPathname (){
  const location = useLocation();
  const previousLocation = useRef(location);

  useEffect(() => {
    previousLocation.current = location;
  }, [location]);

  return previousLocation.current.pathname;
};

export function handleSpeak(text) {
  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  } else {
    alert("Sorry, your browser does not support text-to-speech.");
  }
};