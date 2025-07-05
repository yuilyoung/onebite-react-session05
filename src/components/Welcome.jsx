const Button = (Props) => 
{
    console.log(`${Props.name} 님 다시 오셨군요.`);
    console.log(Props);
    
    return (
      <div>
        {
        Props.isMember === true ? ( <h1>{Props.name} 님 다시 오셨군요. </h1> ) : (<h1>{Props.name} 님 가입하시겠습니까?</h1>)
        }
      </div>
    
    );
};

export default Button;