import { render, h, getCurrentInstance, type VNode, ref } from 'vue'
import { Modal } from 'ant-design-vue'

export default function useDialog() {
  const vm = getCurrentInstance()
	const open = ref(true)
  return function (vnode: VNode, opts?: Object) {
    if (!vm) return

    vnode.appContext = vm.appContext
    const confirm = vnode.props && vnode.props.onConfirm || function() {}
    let dom = document.createElement('div')
    let dialogVnode = h(
      Modal,
      {
        open: true,
				destroyOnClose: true,
				onCancel() {
					dom.remove()
				}
      },
    )
    dialogVnode.appContext = vm.appContext
    render(dialogVnode, dom)
    document.body.appendChild(dom)
  }
}
