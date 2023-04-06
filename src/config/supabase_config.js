import { createClient } from "@supabase/supabase-js";
import { toast } from "react-hot-toast";
import { handleUser } from "utils";
export const supabase = createClient(
  "https://qrklqhjjfbgfyvrztlzv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFya2xxaGpqZmJnZnl2cnp0bHp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODAwMTg3NTEsImV4cCI6MTk5NTU5NDc1MX0.NIO1TQgPFhIOOeDeFPeW40vEr4_GUfOlmEe6SsXCg0M"
);

supabase.auth.onAuthStateChange((_event, session) => {
  if (session) {
    handleUser(session.user);
  } else  {
    handleUser(false);
  }
});


export const updateProfile = async(d) => {
    const {data, error} = await supabase.auth.updateUser({
        data: {
            d
        }
    })
    if (!error) {
        handleUser(data)
    } else {
        toast.error(error)
    }
}