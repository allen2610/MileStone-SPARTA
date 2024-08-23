"use client";
import { redirect } from "next/navigation";
import { inputJournal } from "@/actions/actions"

const JournalForm = () => {
  return (
    <form id="journalform" action={async (formData) => {
        await inputJournal(formData);
        redirect("/");
      }}
    >
        <textarea name="journal" rows="4" className="resize" /> <br />
        <button type="submit" className="bg-blue-100">Submit</button>
    </form>
  )
}

export default JournalForm