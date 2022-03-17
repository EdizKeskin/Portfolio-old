import { Box, Grid } from "@chakra-ui/react";
import { useMemo } from "react";
import Card from "../components/card";
import CustomSpinner from "../components/CustomSpinner";
import axios from "axios";
import { useQuery } from "react-query";

function Projects() {
  const endpoint = process.env.REACT_APP_GRAPHQL_ENDPOINT;
  const MEMBER_QUERY = useMemo(() => {
    return `
    {
      projects {
        link
        title
        image
      }
    }
`;
  }, []);

  const { data, isLoading, error } = useQuery("launches", () => {
    return axios({
      url: endpoint,
      method: "POST",
      data: {
        query: MEMBER_QUERY,
      },
    }).then((response) => response.data.data);
  });

  if (isLoading) return <CustomSpinner />;
  if (error) return <pre>{error.message}</pre>;
  const projects = data.projects;

  return (
    <Box>
      <Grid
        m={10}
       
        templateColumns={{
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
        mt={"16"}
      >
        {projects.map((item, i) => (
          <Card item={item} key={i} />
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
