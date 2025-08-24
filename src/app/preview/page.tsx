import { NextPage } from "next";
import { Suspense } from "react";
import { PreviewInfo } from "~/components/Preview/PreviewInfo";

interface Props {
  searchParams: { [key: string]: string | undefined };
}

const Preview: NextPage<Props> = ({ searchParams }) => {
  return (
    <Suspense>
      <main className="h-full w-full preview-page">
        <div className="h-full w-full p-[50px]">
          <Suspense>
            <PreviewInfo params={searchParams} />
          </Suspense>
        </div>
      </main>
    </Suspense>
  );
};

export default Preview;
