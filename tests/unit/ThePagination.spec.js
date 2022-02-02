import { shallowMount } from '@vue/test-utils';
import ThePagination from '@/components/ThePagination.vue';

describe('ThePagination.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ThePagination, {
      propsData: {
        currentPage: 1,
        totalPages: 5,
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  describe('Props properties', () => {
    describe('maxVisibleButtons', () => {
      it('"maxVisibleButtons" should get the number', async () => {
        await wrapper.setProps({ maxVisibleButtons: 5 });
        expect(wrapper.props().maxVisibleButtons).toBe(5);
      });
    });
  });

  describe('Computed properties', () => {
    describe('isInFirstPage', () => {
      it('"isInFirstPage === 1" should return true', async () => {
        await wrapper.setProps({ currentPage: 1 });
        const firstBtn = wrapper.get('.pagination li:first-child a');
        const prevArrow = wrapper.get('.pagination li:nth-child(2) a');
        const firstPage = wrapper.get('.pagination li:nth-child(3) a');

        expect(firstPage.text()).toEqual('1');
        expect(firstPage.classes('active')).toBe(true);
        expect(firstBtn.classes('disabled')).toBe(true);
        expect(prevArrow.classes('disabled')).toBe(true);
      });

      it('"isInFirstPage === 2" should return false', async () => {
        await wrapper.setProps({ currentPage: 2 });
        const firstBtn = wrapper.get('.pagination li:first-child a');
        const prevArrow = wrapper.get('.pagination li:nth-child(2) a');
        const firstPage = wrapper.get('.pagination li:nth-child(3) a');

        expect(firstPage.classes('active')).toBe(false);
        expect(firstBtn.classes('disabled')).toBe(false);
        expect(prevArrow.classes('disabled')).toBe(false);
      });
    });

    describe('isInLastPage', () => {
      it('"isInLastPage === 5" should return true', async () => {
        await wrapper.setProps({
          currentPage: 5,
          totalPages: 5,
        });
        const lastPage = wrapper.get('.pagination li:nth-last-child(3) a');
        const nextArrow = wrapper.get('.pagination li:nth-last-child(2) a');
        const lastBtn = wrapper.get('.pagination li:last-child a');

        expect(lastPage.text()).toEqual('5');
        expect(lastPage.classes('active')).toBe(true);
        expect(lastBtn.classes('disabled')).toBe(true);
        expect(nextArrow.classes('disabled')).toBe(true);
      });

      it('"isInLastPage === 4" should return false', async () => {
        await wrapper.setProps({
          currentPage: 4,
          totalPages: 5,
        });
        const lastPage = wrapper.get('.pagination li:nth-last-child(3) a');
        const nextArrow = wrapper.get('.pagination li:nth-last-child(2) a');
        const lastBtn = wrapper.get('.pagination li:last-child a');

        expect(lastPage.classes('active')).toBe(false);
        expect(lastBtn.classes('disabled')).toBe(false);
        expect(nextArrow.classes('disabled')).toBe(false);
      });
    });

    describe('pages', () => {
      it('Should show 5 pages (maxVisibleButtons === 5)', async () => {
        await wrapper.setProps({
          currentPage: 1,
          totalPages: 5,
        });

        const firstPage = wrapper.get('.pagination li:nth-child(3) a');
        const lastPage = wrapper.get('.pagination li:nth-last-child(3) a');
        expect(firstPage.text()).toEqual('1');
        expect(lastPage.text()).toEqual('5');
      });

      it('Should show 3 pages (maxVisibleButtons === 3)', async () => {
        await wrapper.setProps({
          maxVisibleButtons: 3,
          currentPage: 1,
          totalPages: 5,
        });

        const firstPage = wrapper.get('.pagination li:nth-child(3) a');
        const lastPage = wrapper.get('.pagination li:nth-last-child(3) a');
        expect(firstPage.text()).toEqual('1');
        expect(lastPage.text()).toEqual('3');
      });

      it('Should show last 3 pages (maxVisibleButtons === 3)', async () => {
        await wrapper.setProps({
          maxVisibleButtons: 5,
          currentPage: 10,
          totalPages: 10,
        });

        const firstPage = wrapper.get('.pagination li:nth-child(3) a');
        const lastPage = wrapper.get('.pagination li:nth-last-child(3) a');
        expect(firstPage.text()).toEqual('6');
        expect(lastPage.text()).toEqual('10');
      });

      it('Should show 2 pages if totalPages === 2', async () => {
        await wrapper.setProps({
          maxVisibleButtons: 5,
          currentPage: 1,
          totalPages: 2,
        });

        const firstPage = wrapper.get('.pagination li:nth-child(3) a');
        const lastPage = wrapper.get('.pagination li:nth-last-child(3) a');
        expect(firstPage.text()).toEqual('1');
        expect(lastPage.text()).toEqual('2');
      });
    });
  });

  describe('Methods functionality', () => {
    describe('changePage', () => {
      it('"changePage" should emit the event', () => {
        const firstPage = wrapper.find('.pagination li:nth-child(3) a');
        firstPage.trigger('click');
        expect(wrapper.emitted('pagechanged')).toHaveLength(1);
      });
    });
  });
});
