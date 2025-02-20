import "./toss.css";

const Toss = () => {
  return (
    <header>
      <nav>
        <div className="toss_logo">
          <img src="toss.png" alt="" />
        </div>
        {/* menulist */}
        <ul className="toss_middle_options">
          <li>회사 소개</li>
          <li>공지사항</li>
          <li>고객센터</li>
          <li>자주 묻는 질문</li>
          <li>토스인증서</li>
          <li>채용</li>
          <div className="toss_right_options">
            <div className="korean">KOR</div>
            <div className="english">ENG</div>
          </div>
        </ul>
      </nav>
    </header>
  );
};
export default Toss;
