"use client";
import { redirect } from "next/navigation";
import { inputJournal } from "@/actions/actions"
import { checkDailyJournal } from "@/actions/actions";

const JournalForm = (
  {journalId, journalContent}
) => {
  
  return (
    <form id="journalform" action={async (formData) => {
        await inputJournal(formData, journalId);
        redirect("/journalling-page");
      }}
    >
      <div className="flex flex-col items-center">
        <textarea name="journal" rows="20" className="resize w-full rounded-xl py-3 px-5">{journalContent}</textarea> <br/>
        <button type="submit" className="bg-green-400 p-2 px-4 rounded-3xl italic text-white w-[100px] flex items-center justify-center font-bold ">Submit</button>
      </div>

    </form>
  )
}

export default JournalForm