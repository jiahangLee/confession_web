import {
  Form, Input, DatePicker, Col, TimePicker, Select, Cascader, InputNumber,Modal} from 'antd';
import React from "react"
import { connect } from 'dva'
const { TextArea } = Input;

const FormItem = Form.Item;
const Option = Select.Option;

const formItemLayout = {
  labelCol: {
    xs: {span: 24},
    sm: {span: 5},
  },
  wrapperCol: {
    xs: {span: 24},
    sm: {span: 12},
  },
};
class ConfessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  showModelHandler = (e) => {
    if (e) e.stopPropagation();
    this.setState({
      visible: true,
    });
  };

  hideModelHandler = () => {
    this.setState({
      visible: false,
    });
  };

  okHandler = () => {
    const { onOk } = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        onOk(values);
        this.hideModelHandler();
      }
    });
  };
  render() {
    const { children } = this.props;
    const { getFieldDecorator} = this.props.form;
    const config = {
      rules: [{ type: 'object', required: true, message: '选择你们的日期!' }],
    };
    return (
      <span>
        <span onClick={this.showModelHandler}>
          {children}
        </span>
        <Modal
          title="填写它生成专属二维码"
          visible={this.state.visible}
          onOk={this.okHandler}
          onCancel={this.hideModelHandler}
        >
      <Form>

        <FormItem {...formItemLayout} hasFeedback label="Ta的姓名">
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
              },
            ],
          })(<Input  placeholder="Ta的名字" />)}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="选择日期"
          hasFeedback
        >
          {getFieldDecorator('loveTime', config, {
            rules: [
              {
                required: true,
              },
            ],
          })( <DatePicker style={{width: '100%'}}/>)}
        </FormItem>
        <FormItem {...formItemLayout} hasFeedback label="想说的话">
          {getFieldDecorator('detail', {
            rules: [
              {
                required: true,
              },
            ],
          })(<TextArea rows={4} placeholder="在这里编写你想告诉Ta的话"/>)}
        </FormItem>


      </Form>
     </Modal>
   </span>
    )
  }
}

export default Form.create()(ConfessionForm);
