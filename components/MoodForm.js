"use client";
import { redirect } from "next/navigation";
import { inputMood } from "@/actions/actions"

const MoodForm = () => {
  return (
    <form id="moodform" action={async (formData) => {
        await inputMood(formData);
        redirect("/");
      }}
    >
        <label>
            <input type="radio" name="option" value="1" />
            Option 1
        </label>
        <label>
            <input type="radio" name="option" value="2" />
            Option 2
        </label>
        <label>
            <input type="radio" name="option" value="3" />
            Option 3
        </label>
        <label>
            <input type="radio" name="option" value="4" />
            Option 4
        </label>
        <label>
            <input type="radio" name="option" value="5" />
            Option 5
        </label>
        <button type="submit" className="bg-blue-100">Submit</button>
    </form>
  )
}

export default MoodForm