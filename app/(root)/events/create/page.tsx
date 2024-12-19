import EventForm from "@/components/shared/EventForm";
import { auth } from "@clerk/nextjs/server";

<<<<<<< HEAD
const CreateEvent = () => {
  
  const userId = "67614bc8ac89c19627aec41a"
 
=======
const CreateEvent = async () => { // [1]
  const { sessionClaims } = await auth(); // [1]

  const userId = sessionClaims?.userId as string;

>>>>>>> parent of 38dd98c (Version 1)
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">Create Event</h3>
      </section>

      <div className="wrapper my-8">
        <EventForm userId={userId} type="Create" />
      </div>
    </>
  );
};

export default CreateEvent;