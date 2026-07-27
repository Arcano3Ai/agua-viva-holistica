import { describe, it, expect } from 'vitest';
import {
  SERVICES,
  BENEFITS,
  UPCOMING_EVENTS,
  TESTIMONIALS,
  GALLERY_ITEMS,
  FAQS,
} from './holisticData';

describe('Data Integrity - holisticData', () => {
  it('contains non-empty SERVICES with required properties', () => {
    expect(SERVICES.length).toBeGreaterThan(0);
    SERVICES.forEach((service) => {
      expect(service.id).toBeTypeOf('string');
      expect(service.title.length).toBeGreaterThan(0);
      expect(service.shortDescription.length).toBeGreaterThan(0);
      expect(service.fullDescription.length).toBeGreaterThan(0);
      expect(service.benefits).toBeInstanceOf(Array);
      expect(service.benefits.length).toBeGreaterThan(0);
      expect(service.image).toMatch(/^\/images\//);
    });
  });

  it('contains non-empty BENEFITS', () => {
    expect(BENEFITS.length).toBeGreaterThan(0);
    BENEFITS.forEach((benefit) => {
      expect(benefit.id).toBeTypeOf('string');
      expect(benefit.title.length).toBeGreaterThan(0);
      expect(benefit.description.length).toBeGreaterThan(0);
    });
  });

  it('contains non-empty UPCOMING_EVENTS with valid spots and prices', () => {
    expect(UPCOMING_EVENTS.length).toBeGreaterThan(0);
    UPCOMING_EVENTS.forEach((event) => {
      expect(event.id).toBeTypeOf('string');
      expect(event.title.length).toBeGreaterThan(0);
      expect(event.spotsLeft).toBeGreaterThanOrEqual(0);
      expect(event.price).toContain('MXN');
    });
  });

  it('contains valid TESTIMONIALS with ratings between 1 and 5', () => {
    expect(TESTIMONIALS.length).toBeGreaterThan(0);
    TESTIMONIALS.forEach((testimonial) => {
      expect(testimonial.id).toBeTypeOf('string');
      expect(testimonial.rating).toBeGreaterThanOrEqual(1);
      expect(testimonial.rating).toBeLessThanOrEqual(5);
    });
  });

  it('contains valid GALLERY_ITEMS with recognized categories', () => {
    expect(GALLERY_ITEMS.length).toBeGreaterThan(0);
    const validCategories = ['Instalaciones', 'Ceremonias', 'Terapias'];
    GALLERY_ITEMS.forEach((item) => {
      expect(validCategories).toContain(item.category);
      expect(item.image).toMatch(/^\/images\//);
    });
  });

  it('contains valid FAQS with questions and answers', () => {
    expect(FAQS.length).toBeGreaterThan(0);
    FAQS.forEach((faq) => {
      expect(faq.question.endsWith('?')).toBe(true);
      expect(faq.answer.length).toBeGreaterThan(10);
    });
  });
});
