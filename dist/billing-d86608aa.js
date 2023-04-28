"use strict";(self.webpackJsonpCheckout=self.webpackJsonpCheckout||[]).push([[876],{48574:(e,t,s)=>{s.r(t),s.d(t,{default:()=>D});var n=s(86940),i=s(91074),r=s(67627),a=s(19053),o=s(95593),d=s(88870),l=s(49890),u=s(55409),c=s(76741),g=s(70140),m=s(74161),h=s(98119),p=s(76417),f=s(19686),v=s(97204),A=s(24648),b=s(53537),C=s(96543),E=s(34323),Z=s(17175),S=s(43276),y=s(67570),F=s(60452),k=s(16206),U=s(78379),w=s(45855),M=s(77683),_=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={isResettingAddress:!1},t.addressFormRef=(0,r.createRef)(),t.handleSelectAddress=function(e){return(0,n.mG)(t,void 0,void 0,(function(){var t,s,i,r;return(0,n.Jh)(this,(function(n){switch(n.label){case 0:t=this.props,s=t.updateAddress,i=t.onUnhandledError,this.setState({isResettingAddress:!0}),n.label=1;case 1:return n.trys.push([1,3,4,5]),[4,s(e)];case 2:return n.sent(),[3,5];case 3:return(r=n.sent())instanceof Error&&i(r),[3,5];case 4:return this.setState({isResettingAddress:!1}),[7];case 5:return[2]}}))}))},t.handleUseNewAddress=function(){t.handleSelectAddress({})},t}return(0,n.ZT)(t,e),t.prototype.render=function(){var e=this.props,t=e.googleMapsApiKey,s=e.billingAddress,n=e.countriesWithAutocomplete,i=e.customer,o=i.addresses,d=i.isGuest,l=e.getFields,u=e.countries,c=e.isUpdating,m=e.setFieldValue,h=e.shouldShowOrderComments,p=e.values,f=e.methodId,C=e.isFloatingLabelEnabled,E="amazonpay"===f,Z=l(p.countryCode),S=Z.filter((function(e){return e.custom})),_=S.length>0,L=E&&_?S:Z,I=this.state.isResettingAddress,z=o&&o.length>0,B=s&&(0,v.Z)(s,o,l(s.countryCode));return r.createElement(k.Z,{autoComplete:"on"},E&&s&&r.createElement("div",{className:"form-fieldset"},r.createElement(M.Z,{address:s})),r.createElement(U.Z,{id:"checkoutBillingAddress",ref:this.addressFormRef},z&&!E&&r.createElement(U.Z,{id:"billingAddresses"},r.createElement(w.Z,{isLoading:I},r.createElement(A.Z,{addresses:o,onSelectAddress:this.handleSelectAddress,onUseNewAddress:this.handleUseNewAddress,selectedAddress:B?s:void 0}))),!B&&r.createElement(a.Z,{isLoading:I},r.createElement(b.Z,{countries:u,countriesWithAutocomplete:n,countryCode:p.countryCode,formFields:L,googleMapsApiKey:t,isFloatingLabelEnabled:C,setFieldValue:m,shouldShowSaveAddress:!d}))),h&&r.createElement(y.Z,null),r.createElement("div",{className:"form-actions"},r.createElement(F.ZP,{disabled:c||I,id:"checkout-billing-continue",isLoading:c||I,type:"submit",variant:F.Wu.Primary},r.createElement(g.Z,{id:"common.continue_action"}))))},t}(r.PureComponent);const L=(0,S.Z)((0,p.withFormik)({handleSubmit:function(e,t){(0,t.props.onSubmit)(e)},mapPropsToValues:function(e){var t=e.getFields,s=e.customerMessage,i=e.billingAddress;return(0,n.pi)((0,n.pi)({},(0,C.Z)(t(i&&i.countryCode),i)),{orderComment:s})},isInitialValid:function(e){var t=e.billingAddress,s=e.getFields,n=e.language;return!!t&&(0,E.Z)({language:n,formFields:s(t.countryCode)}).isValidSync(t)},validationSchema:function(e){var t=e.language,s=e.getFields;return"amazonpay"===e.methodId?(0,f.Vo)((function(e){return(0,Z.Z)({translate:(0,E.w)(t),formFields:s(e&&e.countryCode)})})):(0,f.Vo)((function(e){return(0,E.Z)({language:t,formFields:s(e&&e.countryCode)})}))},enableReinitialize:!0})(_));var I=s(41957);function z(e){var t=(0,I.Z)(e);return t&&["amazonpay"].indexOf(t.providerId)>-1?t.providerId:void 0}var B=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleSubmit=function(e){return(0,n.mG)(t,void 0,void 0,(function(){var t,s,i,r,a,l,u,c,g,m,h,p,f,v,A,b,C=e.orderComment,E=(0,n._T)(e,["orderComment"]);return(0,n.Jh)(this,(function(e){switch(e.label){case 0:t=this.props,s=t.updateAddress,i=t.updateCheckout,r=t.customerMessage,a=t.billingAddress,l=t.navigateNextStep,u=t.onUnhandledError,c=t.shipDate,g=t.arrivalDate,m=t.giftMessage,E&&(h=c.toLocaleDateString("en-US"),p=g.toLocaleDateString("en-US"),f=m.toString(),E.customFields.field_30=h,E.customFields.field_38=p,E.customFields.field_32=f),v=[],(A=(0,o.Z)(E))&&!(0,d.Z)(A,a)&&v.push(s(A)),r!==C&&v.push(i({customerMessage:C})),e.label=1;case 1:return e.trys.push([1,3,,4]),[4,Promise.all(v)];case 2:return e.sent(),l(),[3,4];case 3:return(b=e.sent())instanceof Error&&u(b),[3,4];case 4:return[2]}}))}))},t}return(0,n.ZT)(t,e),t.prototype.componentDidMount=function(){return(0,n.mG)(this,void 0,void 0,(function(){var e,t,s,r,a,o;return(0,n.Jh)(this,(function(n){switch(n.label){case 0:e=this.props,t=e.initialize,s=e.onReady,r=void 0===s?i.noop:s,a=e.onUnhandledError,n.label=1;case 1:return n.trys.push([1,3,,4]),[4,t()];case 2:return n.sent(),r(),[3,4];case 3:return(o=n.sent())instanceof Error&&a(o),[3,4];case 4:return[2]}}))}))},t.prototype.render=function(){var e=this.props,t=e.updateAddress,s=e.isInitializing,i=(e.shipDate,e.arrivalDate,e.giftMessage,(0,n._T)(e,["updateAddress","isInitializing","shipDate","arrivalDate","giftMessage"]));return r.createElement(a.Z,{isLoading:s},r.createElement("div",{className:"checkout-form"},r.createElement("div",{className:"form-legend-container"},r.createElement(h.Z,{testId:"billing-address-heading"},r.createElement(g.Z,{id:"billing.billing_address_heading"}))),r.createElement(L,(0,n.pi)({},i,{onSubmit:this.handleSubmit,updateAddress:t}))))},t}(r.Component);const D=(0,l.Z)((function(e){var t=e.checkoutService,s=e.checkoutState,n=s.data,i=n.getCheckout,r=n.getConfig,a=n.getCart,o=n.getCustomer,d=n.getBillingAddress,l=n.getBillingAddressFields,g=n.getBillingCountries,h=s.statuses,p=h.isLoadingBillingCountries,f=h.isUpdatingBillingAddress,v=h.isUpdatingCheckout,A=r(),b=o(),C=i(),E=a();if(!(A&&b&&C&&E))return null;var Z=A.checkoutSettings,S=Z.enableOrderComments,y=Z.googleMapsApiKey,F=["US","CA","AU","NZ"];return Z.features["CHECKOUT-4183.checkout_google_address_autocomplete_uk"]&&F.push("GB"),{billingAddress:d(),countries:g()||u.L,countriesWithAutocomplete:F,customer:b,customerMessage:C.customerMessage,getFields:l,googleMapsApiKey:y,initialize:t.loadBillingAddressFields,isInitializing:p(),isUpdating:f()||v(),methodId:z(C),shouldShowOrderComments:S&&(0,m.Z)(E)<1,updateAddress:t.updateBillingAddress,updateCheckout:t.updateCheckout,isFloatingLabelEnabled:(0,c.Z)(A.checkoutSettings)}}))(B)}}]);
//# sourceMappingURL=billing-d86608aa.js.map