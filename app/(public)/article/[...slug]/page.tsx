import React from "react";
import ArticlesNavigationSC from "@/app/(public)/article/[...slug]/articles-navigation-sc";
import ArticleContentSC from "@/app/(public)/article/[...slug]/article-content-sc";

// const CustomBreadCrumb = ({ articleId }: { articleId: number }) => {
//   //
//   const { data } = usePostArticleGetBreadCrumbListOnArticleId({
//     "BreadCrumbViewModel.id": articleId,
//   });
//   //
//   const breadCrumbList: {
//     id: number;
//     label?: string;
//     icon: React.ComponentType<IconProps>;
//     ignoreMarginIcon?: boolean;
//   }[] = [
//     {
//       id: 0,
//       icon: Home,
//       ignoreMarginIcon: true,
//     },
//     {
//       id: 1,
//       label: "مقالات",
//       icon: ChevronLeft,
//     },
//     ...(Array.isArray(data)
//       ? data.map((item: any) => ({
//           id: item.Id,
//           label: item.Name,
//           icon: ChevronLeft,
//         }))
//       : []),
//   ];
//   //
//   return (
//     <ul className="flex items-center py-3">
//       {breadCrumbList?.map((item) => (
//         <li key={item.id} className="me-2">
//           <Link href={"/"} className="flex items-center">
//             <item.icon
//               className={cn("mb-1", { "me-2": !item.ignoreMarginIcon })}
//               size={18}
//             />
//             {item.label}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// };

const ArticlePage = ({ params: { slug } }: { params: { slug: string[] } }) => {
  //
  const articleId = +slug?.[0];
  //
  return (
    <section className="px-3 xxl:container">
      <div className="pb-3 pt-4">
        {/* <CustomBreadCrumb articleId={articleId} /> */}
      </div>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-3">
          <nav>
            <ul className="nav nav-list sticky" style={{ display: "inherit" }}>
              <ArticlesNavigationSC />
            </ul>
          </nav>
        </div>
        <div className="col-span-9">
          <ArticleContentSC articleId={articleId} />

          {/* {isLogin ? (
              <Comment articleId={id} />
            ) : (
              <div className="mt-3 text-center alert alert-info" role="alert">
                <span className="font-bold">برای ثبت نظر باید وارد شوید</span>
              </div>
            )} */}

          {/* <CommentList
              articleId={id}
              articleComment={articleComment}
              islogin={isLogin}
            /> */}

          <div id="imgZoomModal" className="image-modal">
            {/* <span className="close" onClick={handleCloseImageModal}>
                &times;
              </span> */}
            <img className="image-modal-content" id="img02" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlePage;
