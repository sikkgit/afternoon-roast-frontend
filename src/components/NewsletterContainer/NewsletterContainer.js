import React from "react";
import { useParams } from "react-router-dom";

export default function NewsletterContainer() {
  const { id } = useParams();

  return <div>hello from newsletter number {id}</div>;
}
