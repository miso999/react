// import Tableheader from "./assets/components/Tableheader";
// import Soobin from "./Soobin";

// function App() {
//   return (
//     <>
//       <tbody>
//         <tr>
//           <Tableheader
//             headerName={"창단일"}
//             backgroundColor={"black"}
//             color={"white"}
//           >
//             이름
//           </Tableheader>
//           <td>최수빈</td>
//         </tr>
//         <tr>
//           <th>나이</th>
//           <td>2000.12.05</td>
//         </tr>
//         <tr>
//           <th>별명</th>
//           <td>모찌</td>
//         </tr>
//       </tbody>
//     </>
//   );
// }

// export default App;

import TableRow from "./container/TableRow";

function App() {
  return (
    <tbody>
      <TableRow
        tableData={{ data: ["2017년 5월 28일"] }}
        header={{
          headerName: "창단일",
          backgroundColor: "black",
          color: "white",
        }}
      />
      <TableRow
        tableData={{ data: ["머한민국"] }}
        header={{
          headerName: "소재지",
          backgroundColor: "black",
          color: "white",
        }}
      />
      <TableRow
        tableData={{ data: ["㈜에이디이스포츠"] }}
        header={{
          headerName: "법인명",
          backgroundColor: "black",
          color: "white",
        }}
      />
      <TableRow
        tableData={{ data: ["어비스컴퍼니"] }}
        header={{
          headerName: "모기업",
          backgroundColor: "black",
          color: "white",
        }}
      />
      <TableRow
        tableData={{
          data: [
            "리그 오브 레전드",
            "배틀그라운드",
            "발로란트",
            "레인보우 식스 시즈",
          ],
        }}
        header={{
          headerName: "종목",
          backgroundColor: "black",
          color: "white",
        }}
      />
    </tbody>
  );
}

export default App;
