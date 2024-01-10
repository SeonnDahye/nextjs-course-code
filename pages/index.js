import fs from "fs/promises"; // 파일 시스템. Node.js의 모듈
import path from "path";

function HomePage(props) {
  const { products } = props;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps(context) {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json"); // cwd : 현재 작업 디렉토리 -> 전체 프로젝트 폴더
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products,
    },
    revalidate: 10, // 이 페이지로 들어오는 모든 요청에 대해 마지막으로 재생성된 지 10초가 지나면 재생성되어야 한다고 Next.js에 말해주는 것
  };
}

export default HomePage;
