import { Outlet } from "react-router-dom";
console.log(Outlet)
export function Films() {
  return (
    <>
    <h1>Тут должны быть фильмы</h1>
    <Outlet/>
    </>
  
  );
}
