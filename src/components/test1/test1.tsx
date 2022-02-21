import { defineComponent } from "vue";
import "./test1.scss";

export default defineComponent({
  name: "TestOne",
  setup() {},
  data() {
    return {
      count: 0
    };
  },
  methods: {
    plus() {
      //
      this.count++;
    }
  },
  render() {
    return (
      <div class="test1" onClick={this.plus}>
        {this.count}
      </div>
    );
  }
});
