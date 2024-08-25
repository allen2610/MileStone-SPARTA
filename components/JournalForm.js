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
      <div className="flex flex-col items-center">
        <textarea name="journal" rows="20" className="resize w-full" /> <br/>
        <button type="submit" className="bg-green-400 p-2 px-4 rounded-3xl text-white w-[100px] flex items-center justify-center font-bold ">Submit</button>
      </div>

    </form>
  )
}

export default JournalForm