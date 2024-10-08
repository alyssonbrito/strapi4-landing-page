/**
 * `landing-page-populate` middleware
 */

import type { Core } from '@strapi/strapi';

const populate = {
  metadata: {
    populate: {
      metaImage: {
        populate: true,
        fields: ['name', 'alternativeText', 'url'],
      },
    },
  },
  blocks: {
    on: {
      'blocks.hero': { populate: '*' },
      'blocks.row': {
        populate: {
          card: {
            populate: { image: { fields: ['name', 'alternativeText', 'url'] } },
          },
        },
      },
      'blocks.pricing-row': { populate: ['plan.services', 'plan.link'] },
      'blocks.cta': { populate: ['form', 'form.input', 'form.button'] },
    },
  },
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In landing-page-populate middleware.');
    ctx.query = {
      populate,
      ...ctx.query,
    };
    await next();
  };
};
