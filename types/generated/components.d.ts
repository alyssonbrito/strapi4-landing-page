import type { Struct, Schema } from '@strapi/strapi';

export interface SeoMetaData extends Struct.ComponentSchema {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'Meta Data';
  };
  attributes: {
    metaTitle: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text;
    metaImage: Schema.Attribute.Media<'images'>;
  };
}

export interface ElementsPricingCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_pricing_cards';
  info: {
    displayName: 'Pricing Card';
    description: '';
  };
  attributes: {
    planType: Schema.Attribute.String;
    planPrice: Schema.Attribute.String;
    isFeatured: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
    link: Schema.Attribute.Component<'elements.button-links', false>;
  };
}

export interface ElementsInput extends Struct.ComponentSchema {
  collectionName: 'components_elements_inputs';
  info: {
    displayName: 'Input';
  };
  attributes: {
    placeholder: Schema.Attribute.String;
    inputType: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface ElementsForm extends Struct.ComponentSchema {
  collectionName: 'components_elements_forms';
  info: {
    displayName: 'Form';
    description: '';
  };
  attributes: {
    header: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    input: Schema.Attribute.Component<'elements.input', true>;
    button: Schema.Attribute.Component<'elements.button-links', false>;
  };
}

export interface ElementsCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    header: Schema.Attribute.String;
    description: Schema.Attribute.Text;
  };
}

export interface ElementsButtonLinks extends Struct.ComponentSchema {
  collectionName: 'components_elements_button_links';
  info: {
    displayName: 'Button Links';
  };
  attributes: {
    title: Schema.Attribute.String;
    link: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    type: Schema.Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
  };
}

export interface BlocksRow extends Struct.ComponentSchema {
  collectionName: 'components_blocks_rows';
  info: {
    displayName: 'Row';
  };
  attributes: {
    card: Schema.Attribute.Component<'elements.card', true>;
  };
}

export interface BlocksPricingRow extends Struct.ComponentSchema {
  collectionName: 'components_blocks_pricing_rows';
  info: {
    displayName: 'Pricing Row';
    description: '';
  };
  attributes: {
    name: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    plan: Schema.Attribute.Component<'elements.pricing-card', true>;
  };
}

export interface BlocksPricingRowWrapper extends Struct.ComponentSchema {
  collectionName: 'components_blocks_pricing_row_wrappers';
  info: {
    displayName: 'Pricing Row Wrapper';
  };
  attributes: {
    PricingRow: Schema.Attribute.Component<'blocks.pricing-row', true>;
  };
}

export interface BlocksPricingRowPage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_pricing_row_pages';
  info: {
    displayName: 'Pricing Row Page';
  };
  attributes: {
    pricingRowWrappers: Schema.Attribute.Component<
      'blocks.pricing-row-wrapper',
      true
    >;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    header: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    link: Schema.Attribute.Component<'elements.button-links', false>;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface BlocksCta extends Struct.ComponentSchema {
  collectionName: 'components_blocks_ctas';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    header: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    form: Schema.Attribute.Component<'elements.form', false>;
  };
}

export interface BlocksCardRow extends Struct.ComponentSchema {
  collectionName: 'components_blocks_card_rows';
  info: {
    displayName: 'CardRow';
    description: '';
  };
  attributes: {
    cards: Schema.Attribute.Component<'elements.card', true>;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
    slug: Schema.Attribute.String;
  };
}

export interface BlocksCardGrid extends Struct.ComponentSchema {
  collectionName: 'components_blocks_card_grids';
  info: {
    displayName: 'Card Grid';
  };
  attributes: {
    cardRow: Schema.Attribute.Component<'blocks.card-row', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'seo.meta-data': SeoMetaData;
      'elements.pricing-card': ElementsPricingCard;
      'elements.input': ElementsInput;
      'elements.form': ElementsForm;
      'elements.card': ElementsCard;
      'elements.button-links': ElementsButtonLinks;
      'blocks.row': BlocksRow;
      'blocks.pricing-row': BlocksPricingRow;
      'blocks.pricing-row-wrapper': BlocksPricingRowWrapper;
      'blocks.pricing-row-page': BlocksPricingRowPage;
      'blocks.hero': BlocksHero;
      'blocks.cta': BlocksCta;
      'blocks.card-row': BlocksCardRow;
      'blocks.card-grid': BlocksCardGrid;
    }
  }
}
