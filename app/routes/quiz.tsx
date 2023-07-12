import { SerializeFrom } from "@remix-run/node";
import { Outlet, useLoaderData, useRouteLoaderData } from "@remix-run/react";
import { getAllQuiz } from "~/models/quiz.server";

export async function loader() {
  return await getAllQuiz();
}

export default function QuizLayout() {
	const loaderData = useLoaderData<typeof loader>();
  return (
    <div className="">
			{loaderData && (
        <>
          {loaderData.map((event, i) => (
            <div key={i}>{event.question}{event.option}</div>
          ))}
        </>
      )}
    </div>
  );
}

export const useAllQuizData = () => {
  const allQuizData = useRouteLoaderData("routes/quiz") as SerializeFrom<
    typeof loader
  >;
  return allQuizData;
};
