import {
  Container,
  Grid,
  GridColumn,
  GridRow,
  Segment,
  Form,
  FormField,
  Button,
  Input,
  TextArea,
  Image,
  Div,
} from "semantic-ui-react";

import { useForm } from "react-hook-form";

type Inputs = {
  firstName: "";
  lastName: "";
  email: "";
  description: "";
};
const fieldWidth = 8;
export default function ContactUs() {
  // handle Event
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>();
  //   Handle Submit
  //   const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
  // console.log(watch("firstName"));

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    console.log(data);
  };

  return (
    <>
      <Segment>
        <Container fluid>
          <Grid columns={2} centered>
            <GridRow color={"teal"}>
              <GridColumn>
                <h1> Contact Us</h1>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn>

              <Form size="huge" onSubmit={handleSubmit(onSubmit)}>
                <Form.Field >
                  <label>First Name</label>
                  <input
                    placeholder="First Name"
                    type="text"
                    {...register("firstName", {
                      required: true,
                      maxLength: 20,
                    })}
                  />
                </Form.Field>
                {errors.firstName && <p>Please check the First Name</p>}
                <Form.Field>
                  <label>Last Name</label>
                  <input
                    placeholder="Last Name"
                    type="text"
                    {...register("lastName", { required: true, maxLength: 20 })}
                  />
                </Form.Field>
                {errors.lastName && <p>Please check the Last Name</p>}
                <Form.Field>
                  <label>Description</label>
                  <textarea
                    placeholder="Description"
                    {...register("description", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                </Form.Field>
                {errors.description && (
                  <p>Description is not filled and cannot be longer than 100 characters. </p>
                )}
                <Form.Field>
                  <label>Email</label>
                  <input
                    placeholder="Email"
                    type="email"
                    {...register("email", {
                      required: true,
                      pattern:
                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    })}
                  />
                </Form.Field>
                {errors.email && <p>Please check the Email</p>}

                {/* <TextArea>
        <label>Description</label>
        <input
        placeholder='Description'
        type='text'
        // defaultValue={event?.description || ''}
        {...register('description', { required: true, maxLength: 100 })}
        />
        </TextArea>
        {errors.description && <p>Please check the Description</p>}  */}

                {/* <Form.Field>
          <label>Password</label>
          <input
            placeholder='Password'
            type='password'
            {...register('password', {
              required: true,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
            })}
          />
        </Form.Field>
        {errors.password && <p>Please check the Password</p>}  */}
                <Button type="submit" primary>Submit</Button>
              </Form>
              </GridColumn>
            </GridRow>
          </Grid>
        </Container>
      </Segment>
      <Segment>
        <Container>
          <Image src="vite.svg" fluid />
        </Container>
      </Segment>
    </>
  );
}
