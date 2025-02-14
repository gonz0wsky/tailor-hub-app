import { Me } from "@features/profile/domain/Me";

export const useProfileViewModel = () => {
  const profile = new Me(
    "1",
    "Gonzalo",
    "123456789",
    "19/09/1990",
    "Calle de la República, 123",
    "https://static.dezeen.com/uploads/2019/07/lucky-cat-restaurant-interiors-london-afroditi-krassa_dezeen_2364_col_13-852x568.jpg"
  );

  return { profile };
};
