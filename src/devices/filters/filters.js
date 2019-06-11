import Vue from 'vue';

Vue.filter('no_underscore', text => text.replace(/_/g, ' '));
