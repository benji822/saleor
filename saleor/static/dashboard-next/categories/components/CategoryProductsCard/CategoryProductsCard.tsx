import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import * as React from "react";

import { MoneyType } from "../../../products";
import { PageListProps } from "../../..";
import CardTitle from "../../../components/CardTitle";
import ProductList from "../../../components/ProductList";
import i18n from "../../../i18n";

interface CategoryProductsCardProps extends PageListProps {
  products?: Array<{
    id: string;
    name: string;
    productType: {
      name: string;
    };
    thumbnailUrl: string;
    availability: {
      available: boolean;
    };
    price: MoneyType;
  }>;
  onAddProduct?();
}

export const CategoryProductsCard: React.StatelessComponent<
  CategoryProductsCardProps
> = ({
  products,
  disabled,
  pageInfo,
  onAddProduct,
  onNextPage,
  onPreviousPage,
  onRowClick
}) => (
  <Card>
    <CardTitle
      title={i18n.t("Products")}
      toolbar={
        <Button color="secondary" variant="flat" onClick={onAddProduct}>
          {i18n.t("Add product")}
        </Button>
      }
    />
    <ProductList
      products={products}
      disabled={disabled}
      pageInfo={pageInfo}
      onNextPage={onNextPage}
      onPreviousPage={onPreviousPage}
      onRowClick={onRowClick}
    />
  </Card>
);

export default CategoryProductsCard;
