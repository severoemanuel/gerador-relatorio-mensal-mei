import { NextPage } from "next";
import { Suspense } from "react";
import { PreviewInfo } from "~/components/Preview/PreviewInfo";

interface Props {}

const Preview: NextPage<Props> = () => {
  return (
    <Suspense>
      <main className="h-full w-full preview-page">
        <div className="h-full w-full p-[50px]">
          <Suspense>
            <PreviewInfo />
          </Suspense>
        </div>
      </main>
    </Suspense>
  );
};

export default Preview;
